package com.example.JobPortalBackend.controller;

import com.example.JobPortalBackend.service.AnalyticsService;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

@Controller
@EnableScheduling
public class AnalyticsWebSocketController {

    private final SimpMessagingTemplate messagingTemplate;
    private final AnalyticsService analyticsService;

    public AnalyticsWebSocketController(SimpMessagingTemplate messagingTemplate,
                                        AnalyticsService analyticsService) {
        this.messagingTemplate = messagingTemplate;
        this.analyticsService = analyticsService;
    }

    @MessageMapping("/requestAnalytics")
    public void sendAnalytics() {
        var analytics = analyticsService.getAnalytics();
        messagingTemplate.convertAndSend("/topic/analytics", analytics);
    }

    @Scheduled(fixedRate = 10000) // every 10 seconds
    public void broadcastAnalytics() {
        var analytics = analyticsService.getAnalytics();;
        messagingTemplate.convertAndSend("/topic/analytics", analytics);
    }
}

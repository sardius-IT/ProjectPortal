package com.example.JobPortalBackend.websocket;

import com.example.JobPortalBackend.service.AnalyticsService;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;
import lombok.RequiredArgsConstructor;

import java.util.Map;

@Component
@RequiredArgsConstructor
public class AnalyticsPublisher {

    private final SimpMessagingTemplate messagingTemplate;
    private final AnalyticsService analyticsService;

    public void publishAnalytics() {
        Map<String, Object> analytics = analyticsService.getAnalytics(); // fetch analytics data
        messagingTemplate.convertAndSend("/topic/analytics", analytics); // broadcast via WebSocket
    }
}

package com.example.JobPortalBackend.websocket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

import com.example.JobPortalBackend.service.AnalyticsService;

//@Controller
public class AnalyticsWebSocketHandler {
     @Autowired
    private AnalyticsService analyticsService;
    @Autowired
    private AnalyticsPublisher analyticsPublisher;

    @MessageMapping("/requestAnalytics")
    public void handleAnalyticsRequest() {
      analyticsPublisher.publishAnalytics(); // ✅
      
    }
}











                  
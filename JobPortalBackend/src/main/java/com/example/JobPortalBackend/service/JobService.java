package com.example.JobPortalBackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.JobPortalBackend.model.Job;
import com.example.JobPortalBackend.repository.JobRepository;
import com.example.JobPortalBackend.websocket.AnalyticsPublisher;

import java.util.*;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;  // Inject JobRepository here

    @Autowired
    private AnalyticsPublisher analyticsPublisher;
    
    @Autowired
    private AnalyticsService analyticsService;

    public void postJob(Job job) {
        jobRepository.save(job);
       analyticsPublisher.publishAnalytics(); // ✅

    }

    public List<Map<String, Object>> getTopJobCategories() {
        return List.of(
            Map.of("name", "Engineering", "count", 120),
            Map.of("name", "Design", "count", 90),
            Map.of("name", "Marketing", "count", 70)
        );
    }

    public List<Map<String, Object>> getMostAppliedJobs() {
        return List.of(
            Map.of("title", "Frontend Developer", "count", 150),
            Map.of("title", "UI/UX Designer", "count", 100),
            Map.of("title", "Backend Developer", "count", 95)
        );
    }
}

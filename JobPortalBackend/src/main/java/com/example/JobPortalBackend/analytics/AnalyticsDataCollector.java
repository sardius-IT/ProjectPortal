package com.example.JobPortalBackend.analytics;

import com.example.JobPortalBackend.repository.*;
import com.example.JobPortalBackend.service.*;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class AnalyticsDataCollector {

    private final UserRepository userRepository;
    private final JobRepository jobRepository;
    private final ApplicationRepository applicationRepository;
    private final ApplicationService applicationService;
    private final UserService userService;
    private final JobService jobService;

    public AnalyticsDataCollector(
        UserRepository userRepository,
        JobRepository jobRepository,
        ApplicationRepository applicationRepository,
        @Lazy ApplicationService applicationService,
        UserService userService,
        JobService jobService
    ) {
        this.userRepository = userRepository;
        this.jobRepository = jobRepository;
        this.applicationRepository = applicationRepository;
        this.applicationService = applicationService;
        this.userService = userService;
        this.jobService = jobService;
    }

    public Map<String, Object> collectAnalytics() {
        Map<String, Object> analytics = new HashMap<>();
        analytics.put("totalUsers", userRepository.count());
        analytics.put("jobsPosted", jobRepository.count());
        analytics.put("applicationsReceived", applicationRepository.count());
        analytics.put("dailyApplications", applicationService.getDailyApplicationStats());
        analytics.put("userTypes", userService.getUserTypeStats());
        analytics.put("jobCategories", jobService.getTopJobCategories());
        analytics.put("mostAppliedJobs", jobService.getMostAppliedJobs());
        return analytics;
    }
}


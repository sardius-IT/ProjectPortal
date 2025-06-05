package com.example.JobPortalBackend.repository;

import com.example.JobPortalBackend.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long> {
}

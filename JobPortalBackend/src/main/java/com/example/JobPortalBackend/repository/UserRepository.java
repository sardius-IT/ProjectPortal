package com.example.JobPortalBackend.repository;

import com.example.JobPortalBackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    // 🔹 Add this to support analytics by role
    long countByRole(String role);
}

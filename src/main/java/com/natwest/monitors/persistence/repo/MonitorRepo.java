package com.natwest.monitors.persistence.repo;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.natwest.monitors.persistence.domain.Monitor;

@Repository
public interface MonitorRepo extends JpaRepository<Monitor, Long>{
	@Query(value="select * from monitor where name like %?1%", nativeQuery = true)
	List<Monitor> findByName(String name);
}

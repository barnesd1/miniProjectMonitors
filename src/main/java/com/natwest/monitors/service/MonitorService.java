package com.natwest.monitors.service;
import java.util.List;
import java.util.Objects;

import org.springframework.stereotype.Service;
import com.natwest.monitors.persistence.domain.Monitor;
import com.natwest.monitors.persistence.repo.MonitorRepo;

@Service
public class MonitorService {
	public MonitorRepo repo;
	public MonitorService(MonitorRepo repo) {
		super();
		this.repo = repo;
	}
	public Monitor createMonitor(Monitor mon) {
		return this.repo.saveAndFlush(mon);
	}
	public List<Monitor> findAll() {
		return this.repo.findAll();
	}
	public Monitor findById(Long id) {
		return this.repo.findById(id).orElseThrow();
	}
	public Monitor updateMonitor(Long id, Monitor mon) {
		Monitor exists = this.repo.getById(id);
		//System.out.println(exists);
		exists.setName(mon.getName());
		exists.setPrice(mon.getPrice());
		Monitor updated = this.repo.save(exists);
	    return updated;
	}
	
	public Boolean deleteMonitor(Long id) {
		Monitor exists = this.repo.getById(id);
		if(Objects.nonNull(exists))
		{
			this.repo.deleteById(id);
			return this.repo.existsById(id);
		}
		else return false;
	}
	
	
	public List<Monitor> findByName(String name) {
		return this.repo.findByName(name);
	}
}

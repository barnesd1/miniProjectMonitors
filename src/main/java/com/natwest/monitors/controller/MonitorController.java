package com.natwest.monitors.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.natwest.monitors.persistence.domain.Monitor;
import com.natwest.monitors.service.MonitorService;

@RestController
public class MonitorController {
	@Autowired
	private MonitorService service;
	
	public MonitorController() {
		super();
	}
	
    @PostMapping("/monitor/create")
    public ResponseEntity<Monitor> createMonitor(@RequestBody Monitor mon) {
        return new ResponseEntity<Monitor>(this.service.createMonitor(mon),HttpStatus.CREATED);
    }
    
    @GetMapping("/monitor/findAll")
    public ResponseEntity<List<Monitor>> findAll() {
    	return new ResponseEntity<List<Monitor>>(this.service.findAll(), HttpStatus.OK);
    }
    
    @PutMapping("/monitor/update/{id}")
    ResponseEntity<Monitor> updateMonitor(@PathVariable("id") Long id, @RequestBody Monitor mon) {
    	return new ResponseEntity<Monitor>(this.service.updateMonitor(id, mon), HttpStatus.OK);
    }
    
    @DeleteMapping("/monitor/delete/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable("id") Long id) {
    	return new ResponseEntity<Boolean>(this.service.deleteMonitor(id), HttpStatus.NO_CONTENT);
    }
    
    @GetMapping("/monitor/findByName/{name}")
    public ResponseEntity<List<Monitor>> findByName(@PathVariable("name") String name) {
    	return new ResponseEntity<List<Monitor>>(this.service.findByName(name), HttpStatus.OK);
    }
}

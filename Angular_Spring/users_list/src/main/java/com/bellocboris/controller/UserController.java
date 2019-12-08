package com.bellocboris.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bellocboris.model.User;
import com.bellocboris.model.UserRepository;

//  REST API. In this case, it's just a simple REST controller.
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
 
    private final UserRepository userRepository;
 
    // standard constructors
    public UserController(UserRepository userRepository) {
    	super();
    	this.userRepository = userRepository;
    }
    
    
    @GetMapping("/users")
    public List<User> getUsers() {
        return (List<User>) userRepository.findAll();
    }
 

	@PostMapping("/users")
    void addUser(@RequestBody User user) {
        userRepository.save(user);
    }
	
	
	
	
	/**
	 * README:
	 * 
	 * the only implementation detail worth noting here is the use of the @CrossOrigin annotation. 
	 * As the name implies, the annotation enables Cross-Origin Resource Sharing (CORS) on the server.

	 * This step isn't always necessary. 
	 * Since we are deploying our Angular frontend to http://localhost:4200 and our Boot backend to http://localhost:8080, 
	 * the browser would otherwise deny requests from one to the other.
	 */
}

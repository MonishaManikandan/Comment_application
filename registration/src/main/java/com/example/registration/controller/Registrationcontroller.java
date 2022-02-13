package com.example.registration.controller;


// import java.util.List;

import com.example.registration.Datamodel.Comment;
import com.example.registration.Datamodel.Registration;
import com.example.registration.Service.Registrationservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class Registrationcontroller {

    @Autowired
    Registrationservice service_obj;

    //Save mapping controller with post mapping
	@PostMapping(value ="/save")
	public String save(@RequestBody Registration registration_obj)
	{
		System.out.println("inside save controller");
		service_obj.save(registration_obj);
		return "Monisha";
	}

	//Save mapping controller with post mapping
	@PostMapping(value ="/reset_password")
	public int reset_password(@RequestBody Registration registration_obj)
	{
		System.out.println("inside save controller");
		registration_obj.setuser_id(service_obj.reset_password(registration_obj));
		return registration_obj.getuser_id();
		//return service_obj.reset_password(registration_obj);
		//return "Monisha";
	} 	 	


     //Save mapping controller with post mapping
	@PostMapping(value ="/getdata")
	public String getdata(@RequestBody Registration registration_obj)
	{
		System.out.println("inside getdata controller");
		return service_obj.getdata(registration_obj);
	}

	 //Save mapping controller with post mapping
	 @PostMapping(value ="/save_comment")
	 public void save_comment(@RequestBody Comment comment_obj)
	 {
		 System.out.println("inside save controller");
		 service_obj.save_comment(comment_obj);
		
	 }
}

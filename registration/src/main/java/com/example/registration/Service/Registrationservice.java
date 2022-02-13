package com.example.registration.Service;
import com.example.registration.Datamodel.Comment;
import com.example.registration.Datamodel.Registration;
import com.example.registration.Repository.CommentRepository;
import com.example.registration.Repository.RegistrationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Registrationservice {

	@Autowired
    RegistrationRepository registration_rep_obj;

	@Autowired
	CommentRepository comment_rep_obj;

    //Save Details
	public String save(Registration registration_obj)
	{
		System.out.println("inside save service");
        registration_obj.setmail_id(registration_obj.getmail_id());
        registration_obj.setpassword(registration_obj.getpassword());
        registration_obj.setsecret_code(registration_obj.getsecret_code());
		System.out.println(registration_obj.getmail_id());
		System.out.println(registration_obj.getpassword());
		registration_rep_obj.save(registration_obj);
		return "ok";
	}

	public String getdata(Registration registration_obj)
	{
		System.out.println("inside delete service");
		String mail_id = registration_obj.getmail_id();
		String password = registration_obj.getpassword();
		System.out.println(mail_id);
		System.out.println(password);
		System.out.println(registration_rep_obj.getdata(mail_id,password));
		return registration_rep_obj.getdata(mail_id,password);
	}

	//Save Details
	public String save_comment(Comment comment_obj)
	{
		System.out.println("inside save service");
        comment_obj.setuser_id(comment_obj.getuser_id());
        comment_obj.setcomment(comment_obj.getcomment());
		System.out.println(comment_obj.getuser_id());
		System.out.println(comment_obj.getcomment());
		comment_rep_obj.save(comment_obj);
		return "ok";
	}

		//Update functionality
		public int reset_password(Registration registration_obj)
		{
			System.out.println("inside update service");
			String mail_id = registration_obj.getmail_id();
			String password = registration_obj.getpassword();
			String secret_code = registration_obj.getsecret_code();		
			return registration_rep_obj.reset_password(mail_id,secret_code,password);
		}
    
}

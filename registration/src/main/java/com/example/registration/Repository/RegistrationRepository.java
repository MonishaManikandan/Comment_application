package com.example.registration.Repository;

// import java.util.List;

import javax.transaction.Transactional;

//import java.util.List;

import com.example.registration.Datamodel.Registration;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RegistrationRepository extends CrudRepository<Registration , Integer> {

    //Record fetch query
	// @Query(value="select * from registration where mail_id = ?1 AND password =?2",nativeQuery=true)
	// List<Registration> getdata(String mail_id, String password);

	//Record fetch query
	@Query(value="select COALESCE(user_id,0) from registration where mail_id = ?1 AND password =?2",nativeQuery=true)
	String getdata(String mail_id, String password);

	
	//update query for particular record
	@Modifying
	@Transactional
	@Query(value="update registration set password = ?3 WHERE mail_id = ?1 AND secret_code =?2",nativeQuery=true)
	int reset_password(String mail_id, String secret_code,String password);

    
}

package com.example.registration.Datamodel;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table
public class Registration {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
    int user_id;
    String mail_id;
    String password;
    String secret_code;

    public int getuser_id() {
		return user_id;
	}
	public void setuser_id(int user_id) {
		this.user_id = user_id;
	}

    public String getmail_id() {
		return mail_id;
	}
	public void setmail_id(String mail_id) {
		this.mail_id = mail_id;
	}

    public String getpassword() {
		return password;
	}
	public void setpassword(String password) {
		this.password = password;
	}

    public String getsecret_code() {
		return secret_code;
	}
	public void setsecret_code(String secret_code) {
		this.secret_code = secret_code;
	}

   
}

package com.example.registration.Datamodel;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Comment {

    
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
    int comment_no;
    int user_id;
    String comment;


    public void setcomment_no(int comment_no)
    {
        this.comment_no=comment_no;
    }

    public int getcomment_no()
    {
        return this.comment_no;
    }


    public int getuser_id() {
		return user_id;
	}
	public void setuser_id(int user_id) {
		this.user_id = user_id;
	}

    public void setcomment(String comment)
    {
        this.comment=comment;
    }

    public String getcomment()
    {
        return this.comment;
    }

    
    
}

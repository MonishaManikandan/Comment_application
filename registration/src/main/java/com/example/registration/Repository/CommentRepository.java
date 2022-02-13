package com.example.registration.Repository;

import com.example.registration.Datamodel.Comment;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends CrudRepository<Comment , Integer> {

    
    
}

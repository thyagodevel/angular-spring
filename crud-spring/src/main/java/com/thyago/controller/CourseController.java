package com.thyago.controller;

import com.thyago.model.Course;
import com.thyago.repository.CoursesRepository;

import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

  private final CoursesRepository coursesRepository;

  //@RequestMapping(method = RequestMethod.GET)
  @GetMapping
  public List<Course> list() {
    return coursesRepository.findAll();
  }


}

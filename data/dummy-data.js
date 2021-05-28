import Category from '../models/category';
import ToDoItem from '../models/todoitem';

export const CATEGORIES = [
  new Category('APOD', 'APOD', '#f5428d'),
  new Category('Mars', 'Mars Rovers', '#f54242'),
  new Category('Twitter', 'Twitter Feed', '#f5a442'),
];

export const TODOITEMS = [
  new ToDoItem('m1', 'c1', 'Finish Project Maven', true),
  new ToDoItem('m2', 'c1', 'Call Ellie', false),
  new ToDoItem('m3', 'c1', 'Take 15 min break', false),
  new ToDoItem('m4', 'c1', 'Research React Native', true),
  new ToDoItem('m5', 'c2', 'Finish homework assignment 1', false),
  new ToDoItem('m6', 'c2', 'Get new Student ID Card', false),
  new ToDoItem('m7', 'c3', 'Buy Tomatoes', false),
  new ToDoItem('m8', 'c3', 'Buy Beer', true),
  new ToDoItem('m9', 'c3', 'Buy Milk', true),
  new ToDoItem('m10', 'c4', 'Finish painting the boat', false),
  new ToDoItem('m11', 'c5', 'Call mom', false),
  new ToDoItem('m12', 'c5', 'Give back money to sis', false),
  new ToDoItem('m13', 'c6', 'Raspberry Pi', false),
  new ToDoItem('m14', 'c6', 'Socks', false),
  new ToDoItem('m15', 'c6', 'Cookbook', true),
  new ToDoItem('m16', 'c6', 'Yoga mat', true),
  new ToDoItem('m17', 'c7', 'Fix the AC', false),
  new ToDoItem('m18', 'c8', 'Bring Sunglasses', false),
  new ToDoItem('m19', 'c9', 'Write a new song', false),
  new ToDoItem('m20', 'c10', 'Learn React Native', true)
];

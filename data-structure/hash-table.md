# Hash Table

A hash table, also knows as hash map, is a data structure that is used to store key-value pairs

Given a key, you can associate a value with that key for very fast lookup

Javascript's Object is a special implementation of the hash table data structure.
However, Object class adds its own keys. Keys that you input may conflict and overwrite the inherited default properties

Maps which were instroduced in 2015 allows you to store key-value pairs

Writing your own hash table implementation is a very popular Javascript Interview question

# Hash table contd.

We store the key value pairs in a fix sized array
Array have a numeric index
How do we go from using a string as an index to number as an index ?
A hashing function accept a string key, converts it into a hash code using a defined logic and then maps it into a numeric index that is within the bounds of the array

Using the index, store the value

The same hashing function is reused to retrieve the value given a key

1. Set to store a key-value pair
2. Get to retrieve a value given its key
3. Remove to delete a key value pair

Hash visualization
![alt text](image-6.png)

# Hash table usage

Hash tables are typically impelemented where constant time lookup and insertion are required
Database indexing
Caches

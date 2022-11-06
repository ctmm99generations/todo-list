import React, { useState, useRef,useEffect } from 'react';
import List from './List';
import { v4 as uuidv4 } from 'uuid';
import Btn from './Btn';
import Form from './Form';
import db from './firebase';
import { doc, updateDoc, deleteDoc, query, orderBy, collection, getDocs, onSnapshot, addDoc, Timestamp} from "firebase/firestore";

const TodoForm = () => {
  const todoNameRef = useRef();
  // タスクを追加する
  const handleAddTodo = async () => { 
    const name = todoNameRef.current.value;
    if (name === "") return;
    // 新しいtodo
    var addData = {
      id: uuidv4(),
      name: name,
      completed: false,
      timeStamp: Timestamp.now(),
    }
    // firebaseにデータ追加
    try {
      const docRef = await addDoc(collection(db, "posts"), addData);
    } catch (e) {
      // エラー用
    }
    todoNameRef.current.value = null;
  }

  // チェックボックスを押して発火した時に呼ぶ関数
  const toggleTodo = (id) => {
    const newPosts = [...posts]; // todosリストをコピー
    const post = newPosts.find((todo) => todo.id === id);    
    // データ取得
    getDocs(query(postData, orderBy("timeStamp"))).then((snapShot) => {
      const docs = snapShot.docs;
      docs.forEach((doc_) => {
        // doc()と名前を被らせないようにするためにdoc_としている
        if (doc_.data().id == id){
          const postRef = doc(db, "posts", doc_.id);
          updateDoc(postRef, {
            completed: !post.completed
          });
        }
      });
    })
  }

  // 削除ボタンを押して発火した時に呼ぶ関数
  const deleteTodo = (id) => {
    // データ取得
    getDocs(query(postData, orderBy("timeStamp"))).then((snapShot) => {
      const docs = snapShot.docs;
      docs.forEach((doc_) => {
        // doc()と名前を被らせないようにするためにdoc_としている
        if (doc_.data().id == id){
          const postRef = doc(db, "posts", doc_.id);
          deleteDoc(postRef);
        }
      });
    })
  }

  const postData = collection(db, "posts")
  // リロードした時にデータベースと連携→データ取得→useEffect
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // データ取得
    getDocs(query(postData, orderBy("timeStamp"))).then((snapShot) => {
      setPosts(snapShot.docs.map((doc) => ({...doc.data()})));
    })
    // 何かしらの操作があった場合リアルタイムで発火
    onSnapshot(query(postData, orderBy("timeStamp")), (post) => {
      setPosts(post.docs.map((doc) => ({...doc.data()})));
    });
  } ,[]);

  return (
    <>
      <Form
        type='text'
        ref={todoNameRef}
      />
      <Btn
        name={"追加"}
        clickFunc={handleAddTodo}
      />
      <List
        contents={posts}
        toggleContent={toggleTodo}
        deleteContent={deleteTodo}
      />
    </>
  );
}
export default TodoForm;

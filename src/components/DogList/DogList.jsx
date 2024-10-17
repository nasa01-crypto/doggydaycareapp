import React from 'react';
import { useGlobalContext } from '../context.';
import {useState, useEffect} from 'react'
import Loading from "../Loader/Loader";
import "./DogList.css"
import { Link } from 'react-router-dom';

function DogList() {

  
  const [dogs, setDogs] = useState([])
  

  useEffect(() => {
    const fetchDogData = async() => {
      try {
        const res = await fetch("https://api.jsonbin.io/v3/b/66f3d48dacd3cb34a88b303f")
        const data = await res.json()
        setDogs(data.record)
        console.log(data)
      } catch (error) { 
        console.error(error)
      }
    }
      fetchDogData()
  }, [])

  return (
 
    <li>
    <li>
    {!dogs.length ? (
      
      <h1 className="text-center">Loading...</h1>
    ) : (
      <div className="dogs-gallery">
      <div className='container'>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {dogs.map((dog) => (
               <Link to ={dog.chipNumber} record={`/${dog.name}`}>                           
                  <article className="border 5px solid #3498db p-5 rounded my-10 lg my-20">
                <img src={dog.img} loading="lazy" className="rounded md:h-72 w-full object cover"/>
                <h3 className="text-black text-lg mt-4">Chip number: {dog.chipNumber} </h3> 
                <h3 className="text-black">Name: {dog.name}</h3> 
                <h3 className="text-black"> Age: {dog.age}</h3> 
                <h3 className="text-black">Sex: {dog.sex}</h3> 
                <h3 className="text-black">Breed: {dog.breed}</h3>   
                <br/> 
                <span className="text-black">Dog Owner:</span>
                <h3 className="text-black">Firstname: {dog.owner.name}</h3>
                <h3 className="text-black">Lastname: {dog.owner.lastName}</h3>
                <h3 className="text-black">Contact: {dog.owner.phoneNumber}</h3>
             
                </article>
                
                </Link>
            ))}
            </div>
      )  </div>
 
 </div>

)} </li>
    </li>
 
    )}
export default DogList

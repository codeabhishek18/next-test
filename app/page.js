'use client'

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() 
{

  const [ courses, setCourses ] = useState(null);
  const [ loading, setLoading ] = useState(true);

	useEffect(()=>
	{
    getTransactions();
		
	},[])

  const getTransactions = async () =>
  {
    try
    {
      const url = '/requests/course'
      const response = await axios.get(url);
      setCourses(response.data)
    }
    catch(error)
    {
      console.log(error)
    }
    finally
    {
      setLoading(false);
    }
  }

  console.log(courses)

  if(loading)
    return

  return (
    <div className="flex flex-col gap-6">

        {courses.map((course)=>
        (
          <p key={course._id} className="font-bold text-xl">{course.title}</p>
        ))}

    </div>
  );
}

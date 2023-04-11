import React from 'react';
import BlogCard from './BlogCard';

const qnAndAns = [
    {
        id: 1,
        qn: "When should you use context API?",
        ans: "Context API should be used when we have data that needs to be shared to many components in our React project. It increase efficiency and give the chance of avoiding multi level props drilling."
    },
    {
        id: 2,
        qn: "What is a custom hook?",
        ans: "Custom hook is a system of pecketing complex code and logic into a reusable function. It is easier to share and maintain across multiple components"
    },
    {
        id: 3,
        qn: "What is useRef?",
        ans: "It is a react hook which allow us to manupulate DOM directly. Value, style, focus etc. can be manupulate by suing useRef() hook"
    },
    {
        id: 4,
        qn: "What is useMemo?",
        ans: "It is hook used to reduse rendering time or calculation time of a complex code or logic. First time it take time as need to exicute a code and save the process in memory. Whenever the same task should be exicuted it can do it so fast"
    }
]

const Blog = () => {
    return (
        <div className='container mx-auto'>

            <h1 className='text-center text-2xl font-bold text-slate-800'>Wellcome to blog</h1>
            <div>
                {qnAndAns.map(aQnAndAns =><BlogCard aQnAndAns={aQnAndAns}></BlogCard>)}

               
            </div>
            
        </div>
    );
};

export default Blog;
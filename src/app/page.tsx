'use client';

import Image from "next/image";
import React from 'react';

export default function Home() {
  const [ dragOver, setDragOver ] = React.useState(false); 
  const handleDragOverStart = () => setDragOver(true);
  const handleDragOverEnd = () => setDragOver(false);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', event.currentTarget.id);
  }

  const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text');
    console.log (`Dropped element with id: ${id}`)
    
  }


  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        <div>
          <p>
            hello world
          </p>

          <div 
            id = "block1" 
            draggable = "true" 
            className = "w-[100px] h-[100px] bg-[#FF0000]"
            onDragStart = {handleDragStart}
            >
            block 1
          </div>
         
          <div 
            onDragOver={enableDropping} 
            onDrop = {handleDrop}  
            onDragEnter = {handleDragOverStart}
            onDragLeave={handleDragOverEnd}
            className = { dragOver? "w-[200px] h-[200px] bg-[grey]" : "w-[200px] h-[200px] bg-[yellow]"}>
              This has the color `{dragOver}`
          </div>

          
        
        </div>
       

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}

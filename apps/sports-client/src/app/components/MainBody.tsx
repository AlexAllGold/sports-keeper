import React from 'react';

interface InputProps {
  posts: any[]
  title: string[]
}
function MainBody({ posts, title } : InputProps) {
  return (
    <div className='flex border border-[#CAD0D8] rounded-md py-1'>
      <table className='w-full'>
        <thead className='border-b border-[#CAD0D8]'>
					 <tr>
             <th className='w-10'>id</th>
						{
              title.map((post : string) => (
							<th key={post}>{post}</th>
						))
            }
						</tr>
        </thead>
        <tbody>
        {
          posts.map((post : Record<string, string>) => (
            <tr className='h-11 border-t border-[#CAD0D8]' key={post.id}>
              {
               Object.keys(post).map(item => (
                 <td className='pl-5 border-t border-x border-[#CAD0D8]' key={item}>
              {post[item]}
                  </td>
                ))
              }
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
}

export default MainBody;

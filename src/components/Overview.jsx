import React from 'react';

function Overview ({ tasks }) {
    return (
        <section>
            <h3>Your Tasks:</h3>
            {tasks.map((input, index) => {
                return (
                 <div>
                     <h6>{input.content}</h6>
                 </div>
                );
            })}
        </section>      
    );
};

export default Overview;
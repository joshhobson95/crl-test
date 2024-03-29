import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Box } from '@mui/material';
import './Home.css';
import ladder from '../assets/lisa-yount-6R_vtAyh2EY-unsplash.jpg';
import Learn from '../assets/Learn.png'
import Listen from '../assets/Listen.png'
import Watch from '../assets/Watch.png'
import boardroom from '../assets/boardroom.jpg'
import kids from '../assets/kids.jpg'
import maps2 from '../assets/maps2.png'
import maps3 from '../assets/maps3.png'
import maps4 from '../assets/maps4.png'
import maps5 from '../assets/maps5.png'
import booksplash from '../assets/booksplash.png'
import yellowsmall from '../assets/paint/yellowpaint.png'

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://dev.relationalearning.com/wp-json/wp/v2/posts') 
      .then(response => response.json())
      .then(data => {
        setPosts(data);

      })
      .catch(error => {
        console.error('Error fetching blog posts:', error);
      });
  }, []);
  console.log(posts)

  const handleSubmit = (e) => {
    e.preventDefault();

  };



  return (
    
    <div className='home_outer_container'>
      <div className='home_top'>
        <div>
          <img className='home_ladder' src={ladder} alt='' />
        </div>
        <div className='home_top_text'>
          <h1 className='freehand_header'>Join Us On The Journey To Put Relationships First</h1>
          <p>RelationaLeadership and RelationaLearning has helped thousands of individuals and scores of schools, community groups and organizations to develop competency in what we call RelationaLeadership and Relationalearning.

          Throughout our four decades of working with educators from the US, the UK, and Australia, we have developed theory and practices for learning and leading relationally.

          We believe skillfully placing relationships first in all our interactions holds the key to personal and professional success, and contributes most to our becoming better human beings.

          Our research, publications, programs and collaborations highlight and support the primacy of Relationships First in making our organizations, schools and communities places of equity, justice, hope, achievement and joy for all.</p>
        </div>
      </div>

<div className='blog_section'>
        <div className='blog_block'>
          <h2>This Week's Blog</h2>
          <img alt=''/>
          <h2>The Story Untold</h2>
          <p>In vestibulum vestibulum posuere. Nulla augue velit, interdum a ultrices sit amet, rhoncus vitae nisi....</p>
        </div>
        <div className='blog_block'>
          <h2>This Week's Blog</h2>
          <img alt=''/>
          <h2>The Story Untold</h2>
          <p>In vestibulum vestibulum posuere. Nulla augue velit, interdum a ultrices sit amet, rhoncus vitae nisi....</p>
        </div>
        <div className='blog_block'>
          <h2>This Week's Blog</h2>
          <img alt=''/>
          <h2>The Story Untold</h2>
          <p>In vestibulum vestibulum posuere. Nulla augue velit, interdum a ultrices sit amet, rhoncus vitae nisi....</p>
        </div>
        <div className='blog_history'>
          <h2>Our History</h2>
          <p>In vestibulum vestibulum posuere. Nulla augue velit, interdum a ultrices sit amet, rhoncus vitae nisi. Curabitur finibus nisi libero, eget vehicula ligula lobortis vitae. </p>
          <button>Learn More</button>
        </div>
</div>

<div className='listen_learn_watch'>
 <div className='home_links'>
  <h2>Learn</h2>
  <img src={Learn} alt='' />
  <p>Check out our Online Courses</p>

 </div>
 <div className='home_links'>
  <h2>Listen</h2>
  <img src={Listen} alt=''/>
  <p>Listen to our Podcast</p>

 </div>
 <div className='home_links'>
  <h2>Watch</h2>
  <img src={Watch} alt=''/>
  <p>Watch Videos from CRL</p>

 </div>

</div>

<div className='CRL_for_all'>
<div className='relationalforall'>
  <h2>RelationaLearning for <span className='underline'>All</span></h2>
</div>
  <div className='CRL_for_all_top'>
    <img src={boardroom} alt=''/>
    <h3>From the board room...</h3>
    <p>Morbi pharetra auctor leo, a porta elit porta non. In porta ipsum id magna interdum, eget molestie magna fermentum. Etiam a rutrum nulla. Suspendisse tempor porta diam at aliquam. Proin eget elit felis. Nam rutrum nibh ac tellus ullamcorper, id varius augue consequat. Suspendisse potenti. Maecenas nec feugiat mauris, a sodales diam. In ut nisi eros. Ut molestie ultricies mollis. Nam auctor lacus nec dolor tincidunt, id ullamcorper felis interdum. Duis vel faucibus purus.</p>
  </div>

  <div className='CRL_for_all_bottom'>
    <img src={kids} alt=''/>
    <h3>...To the classrom</h3>
    <p>Morbi pharetra auctor leo, a porta elit porta non. In porta ipsum id magna interdum, eget molestie magna fermentum. Etiam a rutrum nulla. Suspendisse tempor porta diam at aliquam. Proin eget elit felis. Nam rutrum nibh ac tellus ullamcorper, id varius augue consequat. Suspendisse potenti. Maecenas nec feugiat mauris, a sodales diam. In ut nisi eros. Ut molestie ultricies mollis. Nam auctor lacus nec dolor tincidunt, id ullamcorper felis interdum. Duis vel faucibus purus.</p>
  </div>
</div>

<div className='global_effort'>
  <h2>A Global Effort</h2>
<p>Morbi pharetra auctor leo, a porta elit porta non. In porta ipsum id magna interdum, eget molestie magna fermentum. Etiam a rutrum nulla. Suspendisse tempor porta diam at aliquam. Proin eget elit felis. Nam rutrum nibh ac tellus ullamcorper, id varius augue consequat. Suspendisse potenti. Maecenas nec feugiat mauris, a sodales diam.

In ut nisi eros. Ut molestie ultricies mollis. Nam auctor lacus nec dolor tincidunt, id ullamcorper felis interdum. Duis vel faucibus purus.</p>


<div className='global_bottom'>
  <div>
    <h4>Southwestern USA</h4>
    <img src={maps3} alt=''/>
  </div>
  <div>
    <h4>United Kingdom</h4>
    <img src={maps4} alt=''/>
  </div>
  <div>
    <h4>Australia</h4>
    <img src={maps5} alt=''/>
  </div>
  <div>
    <h4>And remote from anywhere around the World</h4>
    <img src={maps2} alt=''/>
  </div>
</div>
</div>

<div className='home_email_div'>

  <div className='home_email_form_shell'>
  <form onSubmit={handleSubmit} className='home_email_form'>
    <h2>Join Our Email List!</h2>

        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <button type="submit" >Submit</button>
      </form>

  </div>



  
  <div className='booksplash_shell'>
<img src={booksplash} className='booksplash' alt=''/>
  </div>

</div>







    </div>
  );
}

export default Home;

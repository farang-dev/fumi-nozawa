// pages/index.js
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '2em auto', padding: '1em' }}>
      <h1 style={{ textAlign: 'center' }}>Masafumi Nozawa</h1>
      <div style={{ textAlign: 'center' }}>
        <Image
          src="/profile.jpg" // Ensure you have a profile picture named profile.jpg in the public folder
          alt="Your profile picture"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
        />
      </div>
      <p style={{ textAlign: 'center', marginTop: '1em' }}>
        I am a marketing design professional with over six years of experience in digital marketing and brand strategy. I am passionate about creating impactful and visually compelling content that resonates with audiences. My journey has taken me through various industries, including fashion and technology, where I've honed my skills in data-driven marketing and creative storytelling.
      </p>

      <div style={{ marginTop: '2em' }}>
        <h2>Solutions</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">Project 1</a></li>
          <li><a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">Project 2</a></li>
          <li><a href="https://github.com/yourusername/project3" target="_blank" rel="noopener noreferrer">Project 3</a></li>
          {/* Add more projects as needed */}
        </ul>
      </div>
    </div>
  );
}

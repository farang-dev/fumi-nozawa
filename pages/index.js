import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '2em auto', padding: '1em' }}>
      <h1 style={{ textAlign: 'center' }}>Fuminozawa</h1>
      <div style={{ textAlign: 'center' }}>
        <Image
          src="/profile.jpg"
          alt="Your profile picture"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
        />
      </div>
      <p style={{ textAlign: 'center', marginTop: '1em' }}>
        This is a brief description about you. You can talk about your experience, your interests, or a summary of what you do.
      </p>

      <div style={{ marginTop: '2em' }}>
        <h2>Solutions</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href="https://github.com/yourusername/project1" target="_blank">Project 1</a></li>
          <li><a href="https://github.com/yourusername/project2" target="_blank">Project 2</a></li>
          <li><a href="https://github.com/yourusername/project3" target="_blank">Project 3</a></li>
          {/* Add more projects as needed */}
        </ul>
      </div>
    </div>
  );
}

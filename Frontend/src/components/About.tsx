import image from '/book-store.jpg'

export default function About() {
  return (
    <>
    <div>
        <title>About Our Bookstore</title>
        <meta name="description" content="Learn about our bookstore's history, mission, and team." />
    </div>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Our Bookstore</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="mb-4">
          Founded in 2005, our bookstore began as a small corner shop with a passion for sharing great stories. 
          Over the years, we've grown into a community hub for book lovers, hosting author events, book clubs, 
          and providing a curated selection of titles for readers of all ages.
        </p>
        <img
          src= {image}
          alt="Our bookstore front"
          width={500} 
          height={200} 
          className="rounded-lg shadow-md mx-auto pt-4"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          We believe in the power of books to inspire, educate, and transform lives. Our mission is to:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Curate a diverse collection of books for all readers</li>
          <li>Foster a love of reading in our community</li>
          <li>Support local and independent authors</li>
          <li>Create a welcoming space for literary discussions and events</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
        <p className="mb-4">
          We're located in the TownsPlaza Mall in Borivali-West. Come visit us and explore our shelves!
        </p>
        <p>
          <strong>Hours:</strong><br />
          Monday - Friday: 9am - 8pm<br />
          Saturday: 10am - 6pm<br />
          Sunday: 12pm - 5pm
        </p>
      </section>
    </div>
    </>
  )
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const TeamMember: React.FC<TeamMember> = ({ name, role, bio, imageUrl}) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <img
      src={imageUrl} 
      alt={name} 
      width={150} 
      height={150} 
      className="rounded-full mx-auto mb-4"
    />
    <h3 className="text-xl font-semibold mb-2 text-center">{name}</h3>
    <p className="text-gray-600 mb-2 text-center">{role}</p>
    <p className="text-sm">{bio}</p>
  </div>
)

const teamMembers: TeamMember[] = [
  {
    name: "Madhukar Pai",
    role: "Owner & Head Buyer",
    bio: "Alice has been a book lover since childhood and opened the store to share her passion with the community.",
    imageUrl: "/placeholder.svg?height=150&width=150"
  },
  {
    name: "Shashwat Prabhu",
    role: "Events Coordinator",
    bio: "Bob organizes our author events and book clubs, bringing exciting literary experiences to our customers.",
    imageUrl: "/placeholder.svg?height=150&width=150"
  },
  {
    name: "Sameer Singh",
    role: "Children's Literature Specialist",
    bio: "Carol curates our children's section and runs our weekly storytime sessions for young readers.",
    imageUrl: "/placeholder.svg?height=150&width=150"
  }
]


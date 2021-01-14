import Layout from "../layout/Layout"
import Challenge from "../redux_containers/Challenge"
import connectMongoDatabase from "../mongo/connectDB"

// connectMongoDatabase()

export default function HomePage() {
  return (
      <Layout title="Challenge">
        <Challenge />
      </Layout>
    )
  }

  
// Split Popups (summary i prepare)


// When Table is unmount then endGame without Summary

// add 'Enter press' listener to popups
// Main counter miliseconds - font size down
// Randomize possible answers

// Correct logo in header

// SSR
// MongoDB

// Add more animations

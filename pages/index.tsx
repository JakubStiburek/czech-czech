import { NextPage } from 'next'
import NavBar from "./components/NavBar";

interface Props {
  userAgent?: string;
}

const Home: NextPage<Props> = ({ userAgent }) => {
  return (
    <div>
      <NavBar/>
    </div>
  )
}

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}

export default Home

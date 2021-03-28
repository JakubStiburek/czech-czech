import { NextPage } from 'next'

interface Props {
  userAgent?: string;
}

const Home: NextPage<Props> = ({ userAgent }) => {
  return (
    <div>
    </div>
  )
}

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}

export default Home

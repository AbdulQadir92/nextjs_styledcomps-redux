import Link from 'next/link'

const NotFound = () => {
    return (
        <div>
            <p>Page not found</p>
            <Link href="/">Back to Homepage</Link>
        </div>
    )
}

export default NotFound
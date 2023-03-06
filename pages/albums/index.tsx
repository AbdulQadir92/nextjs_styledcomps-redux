import { connect } from 'react-redux'
import { getAlbums } from "../../store/actions/albumActions"
import { useEffect } from 'react'
import Link from 'next/link'


const Albums = ({ getAlbums, albums, error }: any) => {
    useEffect(() => {
        getAlbums()
    }, [])

    return (
        <div>
            {Object.keys(error).length === 0 && albums.map((album: any) => (
                <div key={album.id}>
                    <Link href={`/albums/${album.id}`}>
                        <p>{album.title}</p>
                        <img src={album.url} alt="..." width="100" height="80" />
                    </Link>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        albums: state.albums.albums,
        error: state.albums.error
    }
}

export default connect(mapStateToProps, { getAlbums })(Albums)
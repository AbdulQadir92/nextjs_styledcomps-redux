import { connect } from 'react-redux'
import { getAlbum } from '../../store/actions/albumActions'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


const Album = ({ getAlbum, album }: any) => {
    const router = useRouter();
    const { id } = router.query

    useEffect(() => {
        getAlbum(id);
    }, [])

    return (
        <div>
            <h3>Album</h3>
            <p>{album.title}</p>
            <img src={album.url} alt="..." width="100" height="80" />
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        album: state.albums.album
    }
}

export default connect(mapStateToProps, { getAlbum })(Album)
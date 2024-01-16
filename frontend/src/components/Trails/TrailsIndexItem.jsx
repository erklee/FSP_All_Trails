import './TrailsIndexItem.css'

function TrailsIndexItem({trail}){
    return (
        <div className='trailWrapper'>
            <li>{trail.name}</li>
            <li>{trail.description}</li>
        </div>
    )
}

export default TrailsIndexItem
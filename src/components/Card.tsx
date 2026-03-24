interface CardProps {
    title: string;
    description: string;
}

function Card({ title, description }: CardProps) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', borderRadius: '8px', backgroundColor: '#f9f9f9', color: '#333' }}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}
export default Card;
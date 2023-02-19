const PosterPreview = ({people}) => {
    console.log(people)
    console.log('people')

    return (
        <div>
            <img src={people.img} alt={people.name}/>
        </div>
    );
};

export {PosterPreview};
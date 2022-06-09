import Filter from "./Filter";

const AllCategories = () => {
    return(<div>
        <h1>What kind of food do you like?</h1>
        {['SEAFOOD', 'ITALIAN', 'APPETIZERS', 'SALADS', 'ALL'].map((category, item) => 
        <Filter key={item} category={category}/>)}
        </div>)
}
export default AllCategories;
export default function Filter({ search, handleSearchChange }) {
    return (
        <>
            <div>
                filter shown with <input value={search} onChange={handleSearchChange} />
            </div>
        </>
    )

}
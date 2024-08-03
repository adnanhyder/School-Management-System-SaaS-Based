export default function GenerateOptions({items}) {
    return (
        <>
            <option key="0" value="">
                Select Value
            </option>
            {items.map(item => (
                <option key={item.id} value={item.id}>
                    {item.name} - {item.email}
                </option>

            ))}
        </>
    )
};


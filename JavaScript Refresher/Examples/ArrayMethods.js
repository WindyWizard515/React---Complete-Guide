function transformToObjects(Array) {
    const transformedList = []
    Array.forEach(element => {
        transformedList.push({val: element})
    });

    console.log(transformedList)
    return transformedList
}

transformToObjects([1, 2, 3])
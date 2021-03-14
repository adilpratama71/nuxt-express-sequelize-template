const getFruits = (req, res) => {
  const fruits = [
    {
      id: "1",
      name: "Apple"
    },
    {
      id: "2",
      name: "Orange"
    },
    {
      id: "3",
      name: "Mango"
    },
    {
      id: "4",
      name: "Grape"
    }
  ]
  return res.status(200).json(fruits)
}

module.exports = {
  getFruits
}

interface Employee {
    name :string
    id:number
}

interface Admin {
    isAdmin :boolean
    accessLevel : number
}

type AdminEmployee = Employee & Admin;
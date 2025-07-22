export interface Candidature {
    id: number
    lastname: string
    firstname: string
    email: string
    job: string
    date: string
    statut: 'en attente'|'accepté'|'refusé'

}
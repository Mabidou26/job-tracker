export interface Candidature {
    
    id: string
    lastname: string
    firstname: string
    email: string
    job: string
    date: string
    statut: 'en attente'|'accepté'|'refusé'

}
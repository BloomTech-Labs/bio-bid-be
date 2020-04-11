const resolvers = {
    Query: {
       studies: (parent, args, {prisma}, info) => {
        return prisma.studies();
       },
       companies: (parent, args, {prisma}, info) => {
           return prisma.companies();
       },
       bids: (parent, args, {prisma}, info) => {
            return prisma.bids();
       }
    },
    Study: {
        company: (parent, args, {prisma}, info) => {
         return prisma.study({id: parent.id}).company();
        }
    },
    Company: {
        studies: (parent, args, {prisma}, info) => {
            return prisma.studies();
        }
    },
    Bid: {
        study: (parent, args, {prisma}, info) => {
           return prisma.bid({id: parent.id}).study();
        },
        company: (parent, args, {prisma}, info) => {
            return prisma.bid({id: parent.id}).company();
        }
    }
}

module.exports = resolvers;
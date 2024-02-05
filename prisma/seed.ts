import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.activiti.upsert({
    where: { title: 'Aliens' },
    update: {},
    create: {
      title: 'Evento Deportivo',
      description: 'El Deporte es salud.',
      lastSee:
        "Simón Bolívar 1-62 y Manuel Vega",
      countLastSee:12,  
      exint: false,
    },
  });

    const post2 = await prisma.activiti.upsert({
    where: { title: 'Casa Deportiva' },
    update: {},
    create: {
      title: 'Casa Deportiva',
      description: 'registrate y se parte de nosotros.',
      lastSee:
        "Calderon Park",
      countLastSee:5,  
      exint: false,
    },
  });



  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
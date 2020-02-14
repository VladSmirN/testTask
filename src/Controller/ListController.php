<?php

namespace App\Controller;
use App\Entity\Book;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ListController extends AbstractController
{
    /**
     * @Route("/list", name="list")
     */
    public function index()
    {   
        $repository = $this->getDoctrine()->getRepository(Book::class);
        $books = $repository->findAll();
        return $this->render('list/index.html.twig', [
            'books' => $books
        ]);
    }
}

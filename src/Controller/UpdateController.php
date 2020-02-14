<?php

namespace App\Controller;

use App\Entity\Book;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class UpdateController extends AbstractController
{
    /**
     * @Route("/update", name="update")
     */
    public function index($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $book = $this->getDoctrine()->getRepository(Book::class)->find($id);

        $form = $this->createFormBuilder($book)
            ->add('name', TextType::class)
            ->add('author', TextType::class)
            ->add('year', NumberType::class, [
                'required' => true,
                'attr' => array(
                    'min' => 0,
                    'max' => 3000,
                ),
            ])
            ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $data = $form->getData();
            $em->persist($book);

            $em->flush();

            return $this->redirectToRoute('list');

        }

        return $this->render('update/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}

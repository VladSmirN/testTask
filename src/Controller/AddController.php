<?php

namespace App\Controller;
use App\Entity\Book;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
 
class AddController extends AbstractController
{
    /**
     * @Route("/add", name="add")
     */
    public function index(Request $request  )
    {   
        $em = $this->getDoctrine()->getManager();
         
		$book = new Book();
        $book->setName('book name');
        $book->setYear('2020');
        $book->setAuthor('Author');
		$form = $this->createFormBuilder($book)
			->add('name', TextType::class)
            ->add('author', TextType::class)
			->add('year',  NumberType::class, [
                'required' => true,
                'attr'     => array(
                    'min'  => 0,
                    'max'  => 3000,
                ) 
            ])
			->getForm();
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
             
			$data = $form->getData();
			$em->persist($book);

			$em->flush();

            return $this->redirectToRoute('list');
        
		}
        return $this->render('add/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}

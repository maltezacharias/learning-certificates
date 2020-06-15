<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class LoginController extends AbstractController
{
    /**
     * @Route("/", name="login")
     */
    public function list()
    {
        $number = random_int(0, 100);
        return $this->render('login.html.twig',[]);
    }
}

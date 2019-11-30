import React from 'react';
import { NavBar } from './nav-bar';

export const About = () => (
	<>
		<NavBar isLoggedIn={true} />
		<div className="jumbotron">
			<h1 className="display-4">Secret Santa</h1>
			<p className="lead">This is the secret santa, check it out!</p>
			<hr className="my-4" />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus
				lacus mauris, at varius urna tempus et. Integer felis leo, vehicula in lorem
				nec, vehicula bibendum mi. Maecenas non lectus eleifend, pharetra turpis a,
				consectetur nisl. Nam lobortis, justo nec auctor rhoncus, est eros facilisis
				mauris, sed congue mauris ipsum id erat. Integer blandit ac lorem at semper.
				Proin dapibus velit magna. Suspendisse luctus odio eget finibus feugiat. Cras
				imperdiet a magna sit amet efficitur. Etiam varius mollis tellus, sed
				tincidunt ipsum vehicula quis. Duis massa arcu, scelerisque et semper vitae,
				scelerisque sed tellus. Cras a sapien elit. Donec neque lectus, rhoncus eget
				bibendum in, tempus non leo. In aliquet, risus non tempor ornare, quam quam
				viverra dui, non feugiat ante magna at turpis. Phasellus ut sollicitudin
				diam.
			</p>
			<p>
				Aliquam viverra tristique lectus, in auctor arcu aliquam et. Ut a mattis
				massa. Donec non libero a orci cursus auctor. Praesent luctus velit ac dolor
				posuere faucibus. Praesent vitae nulla a ante consectetur aliquam. Ut at
				tincidunt dolor. Phasellus lectus tellus, vulputate scelerisque ipsum eget,
				ornare sodales nibh. Maecenas gravida nisl metus, eget ornare ligula aliquam
				ac.
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Learn more
			</a>
		</div>
		<div className="media">
			<img
				src="https://image.freepik.com/vector-gratis/divertido-santa-claus-celebrando-navidad_74855-962.jpg"
				className="align-self-start mr-3"
				alt="alt text"
			/>
			<div className="media-body">
				<h5 className="mt-0">This is an image</h5>
				<p>
					Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.
					Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
					ridiculus mus.
				</p>
			</div>
		</div>
	</>
);
